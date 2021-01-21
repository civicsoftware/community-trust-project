import React from "react";
import { default as Windmill } from "@windmill/react-ui";
import { gql, useQuery } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const TEAM = gql`
  query {
    project(id: "5Kozg1PiapEbY8GwbEdWp3") {
      name
      motivation {
        json
      }
      impact {
        json
      }
      teamsCollection(limit: 10) {
        items {
          name
          email
          rolesCollection(limit: 20) {
            items {
              name
              description {
                json
              }
              civicContributorsCollection(limit: 20) {
                items {
                  name
                  email
                  photo {
                    title
                    description
                    url(
                      transform: {
                        width: 100
                        height: 100
                        resizeStrategy: THUMB
                        resizeFocus: FACE
                        cornerRadius: -1
                      }
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Team() {
  const { loading, error, data } = useQuery(TEAM);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}(</p>;
  const project = data?.project;
  return (
    <>
      <div className="mx-auto max-w-4xl">
        <section className="my-24" id="library">
          <div className="mx-6 max-w-7xl lg:mx-12 lg:px-12">
            <div className="flex items-center text-gray-900">
              <h2 className="text-2xl font-semibold lg:text-3xl">
                {project?.name}
              </h2>
            </div>
            <div className="block mt-4 font-rubik prose prose-lg">
              {documentToReactComponents(project?.motivation?.json)}
            </div>
            <div className="block mt-4 font-rubik prose prose-lg">
              {documentToReactComponents(project?.impact?.json)}
            </div>
            <div>
              {project?.teamsCollection?.items?.map(team => (
                <div>
                  <h3>{team?.name}</h3>
                  {team?.rolesCollection?.items?.map(role => (
                    <div>
                      <p>
                        {role?.name}:{" "}
                        {role?.civicContributorsCollection?.items?.map(
                          contributor => (
                            <>
                              <span>{contributor?.name}</span>
                              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                              <img
                                src={contributor?.photo?.url}
                                alt={contributor?.photo?.description}
                              />
                            </>
                          )
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Team;
