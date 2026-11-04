import { PageHero, L } from "@/components/Section";
import Button from "@/components/Magnetic";
export default function NotFound() {
  return <PageHero eyebrow="404" title={<><L>Door not</L><L>found.</L></>} text="That page isn't here. Let's get you back on track."><Button href="/">Back home</Button></PageHero>;
}
