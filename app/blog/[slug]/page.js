import BlogDetails from "@/components/Page/BlogDeatils/BlogDetails";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/${params.slug}`
  );
  const data = await res.json();

  if (!data?.data) return notFound();

  return {
    title: data.data.title,
    description: data.data.expert?.slice(0, 200),
    alternates: {
      canonical: `http://polytechub.vercel.app/blog/${params.slug}`,
    },
  };
}

export default async function BlogPage({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/${params.slug}`
  );
  const data = await res.json();

  if (!data?.data) return notFound();

  return <BlogDetails />;
}
