import { createRouter, createWebHistory } from "vue-router"; // 修正拼写错误
import HomePage from "../components/HomePage.vue";
import Dinosaur from "../components/Dinosaur.vue";

const router = createRouter({  // 修改为正确的创建方式
    history: createWebHistory("/"),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        },
        {
            path: "/:dinosaur",
            name: "Dinosaur",
            component: Dinosaur,
            props: true
        },
    ]
});

export default router;