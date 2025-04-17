const Page = async ({ params }: { params: Promise<{ question: string }> }) => {
  const { question } = await params;
  console.log('jeø', params);
  return <div>Question sdf {question}</div>;
};

export default Page;
