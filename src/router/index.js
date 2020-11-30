import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";
import Header from "../layout/Header.vue";
import Content from "../layout/Content.vue";
import Footer from "../layout/Footer.vue";
import Search from "../views/Search.vue";
import Home from "../views/Home.vue";
import Manage from "../views/Manage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    path: "/",
    // name: "Index",
    component: Index,
    redirect: "",
    children: [
      {
        path: "",
        redirect: "/home",
        components: {
          header: Header,
          content: Content,
          footer: Footer,
        },
        children: [
          {
            path: "home",
            name: "Home",
            component: Home,
          },
          {
            path: "search",
            name: "Search",
            component: Search,
          },
          {
            path: "details",
            name: "Details",
            props: (route) => ({ id: route.query.id }),
            component: () =>
              import(/* webpackChunkName: "Details" */ "../views/Details.vue"),
          },
          {
            path: "manage",
            name: "Manage",
            redirect: "manage/paper",
            component: Manage,
            children: [
              {
                path: "paper",
                name: "Paper",
                component: () =>
                  import(
                    /* webpackChunkName: "paper" */ "../components/ManagePaper.vue"
                  ),
              },
              {
                path: "briefReportExterior",
                name: "briefReportExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "ManageBriefReportExterior" */ "../components/ManageBriefReportExterior.vue"
                  ),
              },
              {
                path: "briefReportInterior",
                name: "briefReportInterior",
                component: () =>
                  import(
                    /* webpackChunkName: "ManageBriefReportInterior" */ "../components/ManageBriefReportInterior.vue"
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
