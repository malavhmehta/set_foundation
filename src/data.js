/**
 * data.js: contains the config and data for the app
 *   - data can be changed here to affect the contents of the app
 *   - future implementations can fetch this data from an external source
 *
 * todo:
 *   - connect data to external source (i.e firebase)
 *   - fetch data dynamically on page load
 *   - create admin interface to modify this data
 */

export default {
  register_link: "",
  nav: {
    brand: "SET.Ottawa",
    links: [
      {
        to: "/#set",
        name: "About SET"
      },
      {
        to: "/#why",
        name: "Why attend"
      },
      {
        to: "/#speakers",
        name: "Speakers"
      },
      {
        to: "/about",
        name: "About"
      }
    ]
  },
  conference: {
    year: 2020,
    location: {
      name: "SITE Building, uOttawa",
      map: "https://www.google.com/maps/dir//SITE+Building+uOttawa,+800+King+Edward+Ave,+Ottawa,+ON+K1N+6N5/@45.4192003,-75.6793762,17.98z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4cce05a74e932365:0xbb3cbb7823e474ec!2m2!1d-75.6785228!2d45.4192406"
    },
    dates: {
      early_bird: new Date(2020, 8, 1),
      regular: new Date(2020, 9, 1),
      conference: new Date(2020, 10, 13)
    }
  },
  landing: {
    lead: "Join like-minded high school students interested in pursuing a career in engineering and technology at SET 2020.",
    after_movie: "https://youtube.com"
  }
};
