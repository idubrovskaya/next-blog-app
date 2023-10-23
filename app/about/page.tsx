import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About | Next App', // изменится название вкладки браузера при переходе на страницу About
}

export default function About () {
  return <h3>Select subitem</h3>
}