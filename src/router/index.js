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
import Question from "../views/Question.vue";
import Library from "../views/Library.vue";
import Book from "../views/Book.vue";
import Journal from "../views/Journal.vue";
import SearchIndex from "../views/SearchIndex.vue";
import ClassResource from "../views/ClassResource.vue";
import Tools from "../views/Tools.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue")
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
          footer: Footer
        },
        children: [
          {
            path: "home",
            name: "Home",
            component: Home
          },
          {
            path: "search",
            name: "Search",
            component: Search
          },
          {
            path: "library",
            name: "Library",
            component: Library,
            children: []
          },
          {
            path: "library/book",
            name: "Book",
            component: Book
          },
          {
            path: "library/journal",
            name: "Journal",
            component: Journal
          },
          {
            path: "wiki",
            name: "Wiki",
            component: Wiki
          },
          {
            path: "question",
            name: "Question",
            component: Question
          },
          {
            path: "download",
            name: "Download",
            component: Download,
            children: []
          },
          {
            path: "download/searchIndex",
            name: "SearchIndex",
            component: SearchIndex
          },
          {
            path: "download/classResource",
            name: "ClassResource",
            component: ClassResource
          },
          {
            path: "download/tools",
            name: "Tools",
            component: Tools
          },
          {
            path: "statistics",
            name: "Statistics",
            component: Statistics
          },
          {
            path: "details",
            name: "Details",
            props: route => ({
              originId: route.query.originId,
              infoType: route.query.infoType,
              infoTitle: route.query.infoTitle,
              infoFileUrl: route.query.infoFileUrl
            }),
            component: () =>
              import(/* webpackChunkName: "Details" */ "../views/Details.vue")
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
                  )
              },
              {
                path: "briefReportInterior",
                name: "briefReportInterior",
                component: () =>
                  import(
                    /* webpackChunkName: "ManageBriefReportInterior" */ "../components/ManageBriefReportInterior.vue"
                  )
              },
              {
                path: "industryTrend",
                name: "industryTrend",
                component: () =>
                  import(
                    /* webpackChunkName: "industryTrend" */ "../components/ManageIndustryTrend.vue"
                  )
              },
              {
                path: "paperExterior",
                name: "paperExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "paperExterior" */ "../components/ManagePaperExterior.vue"
                  )
              },
              {
                path: "patentExterior",
                name: "patentExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "patentExterior" */ "../components/ManagePatentExterior.vue"
                  )
              },
              {
                path: "reportExterior",
                name: "reportExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "reportExterior" */ "../components/ManageReportExterior.vue"
                  )
              },
              {
                path: "reportInterior",
                name: "reportInterior",
                component: () =>
                  import(
                    /* webpackChunkName: "reportInterior" */ "../components/ManageReportInterior.vue"
                  )
              },
              {
                path: "standardExterior",
                name: "standardExterior",
                component: () =>
                  import(
                    /* webpackChunkName: "standardExterior" */ "../components/ManageStandardExterior.vue"
                  )
              },
              {
                path: "notice",
                name: "notice",
                component: () =>
                  import(
                    /* webpackChunkName: "notice" */ "../components/ManageNotice.vue"
                  )
              },
              {
                path: "question",
                name: "question",
                component: () =>
                  import(
                    /* webpackChunkName: "question" */ "../components/ManageQuestion.vue"
                  )
              },
              {
                path: "classResource",
                name: "classResource",
                component: () =>
                  import(
                    /* webpackChunkName: "classResource" */ "../components/ManageClassResource.vue"
                  )
              },
              {
                path: "infoLibrary",
                name: "infoLibrary",
                component: () =>
                  import(
                    /* webpackChunkName: "infoLibrary" */ "../components/ManageInfoLibrary.vue"
                  )
              },
              {
                path: "importantProduct",
                name: "importantProduct",
                component: () =>
                  import(
                    /* webpackChunkName: "infoLibrary" */ "../components/ManageImportantProduct.vue"
                  )
              }
            ]
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
