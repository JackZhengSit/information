import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";
import Header from "../layout/Header.vue";
import Content from "../layout/Content.vue";
import Footer from "../layout/Footer.vue";
import Search from "../views/Search.vue";
import Home from "../views/Home.vue";
import Manage from "../views/Manage.vue";
import Download from "../views/Download.vue";
import Statistics from "../views/Statistics.vue";
import Wiki from "../views/Wiki.vue";

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
            path: "wiki",
            name: "Wiki",
            component: Wiki,
          },
          {
            path: "download",
            name: "Download",
            component: Download,
          },
          {
            path: "statistics",
            name: "Statistics",
            component: Statistics,
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
            redirect: "manage/industryTrend",
            component: Manage,
            children: [
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
              {
                path: "industryTrend",
                name: "industryTrend",
                component: () =>
                  import(
                    /* webpackChunkName: "industryTrend" */ "../components/ManageIndustryTrend.vue"
                  ),
              },
              {
                path: "paperExterior",
                name: "paperExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "paperExterior" */ "../components/ManagePaperExterior.vue"
                  ),
              },
              {
                path: "patentExterior",
                name: "patentExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "patentExterior" */ "../components/ManagePatentExterior.vue"
                  ),
              },
              {
                path: "reportExterior",
                name: "reportExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "reportExterior" */ "../components/ManageReportExterior.vue"
                  ),
              },
              {
                path: "reportInterior",
                name: "reportInterior",
                component: () =>
                  import(
                    /* webpackChunkName: "reportInterior" */ "../components/ManageReportInterior.vue"
                  ),
              },
              {
                path: "standardExterior",
                name: "standardExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "standardExterior" */ "../components/ManageStandardExterior.vue"
                  ),
              },
              {
                path: "notice",
                name: "notice",
                component: () =>
                  import(
                    /* webpackChunkName: "notice" */ "../components/ManageNotice.vue"
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
