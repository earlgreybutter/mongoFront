import Vue from "vue";
import Router from "vue-router";
import List from "@/components/board/List"; //게시판 리스트 컴포넌트 호출
import Data from "@/components/board/Data";

Vue.use(Router); //vue 라우터 사용

export default new Router({
  //라우터 연결
  routes: [
    {
      path: "/",
      // name: HelloWorld,
      component: List,
    },
    {
      path: "/board/data",
      // name: List,
      component: Data,
    },
  ],
});
