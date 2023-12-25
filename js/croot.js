import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

if (getCookie("token") === "") {
  window.location.replace("/login");
}