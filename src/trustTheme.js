export default {
  button: {
    primary: {
      base:
        "text-white bg-purple-dark hover:bg-purple-light border border-transparent",
      active:
        "active:bg-purple-dark hover:bg-purple-light focus:shadow-outline-pink",
      disabled: "opacity-50 cursor-not-allowed"
    },
    outline: {
      base:
        "bg-white text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none",
      active:
        "active:bg-white hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray",
      disabled: "opacity-50 cursor-not-allowed bg-gray-300"
    },
    link: {
      base:
        "text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent",
      active:
        "active:bg-white hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10",
      disabled: "opacity-50 cursor-not-allowed"
    }
  }
};
