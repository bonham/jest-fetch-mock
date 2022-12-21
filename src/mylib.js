import fetch from 'node-fetch';

export function mycalc(a,b) {
  return (a + b)
}

export async function myfetch() {
  const response = await fetch('https://elfu.de/');
  const body = await response.text();
  return body
}