import { NextPage, GetStaticProps } from "next";
import { db } from "@/firebase";
import { Escape } from "@/interfaces";

type Props = {
  escape: Escape;
};

const Page: NextPage<Props> = ({ escape }: Props) => {
  return <>{escape.title}</>;
};

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const escapesRef = db.collection("escapes");
  const escapeDoc = await escapesRef.doc("VYzWcFzS9VsatuFAaewi").get();
  const escape = escapeDoc.data();
  return { props: { escape } };
};
