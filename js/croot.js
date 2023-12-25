import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

if (getCookie("login") === "") {
  window.location.replace("/login");
}