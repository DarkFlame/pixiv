import Router from 'koa-router';
import convert from 'koa-convert';
import importDir from 'import-dir';
const routes = importDir('./routes');

export default function api() {
  const router = new Router({
    prefix: '/api'
  });
  // Object.keys(routes).forEach(name => {
  //   return routes[name](router)
  // });
  return convert.compose([
    router.routes(),
    router.allowedMethods(),
  ]);
}
