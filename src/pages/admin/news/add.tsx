import dynamic from "next/dynamic";

function add() {
  const MyEditor = dynamic(() => import('@/components/myEditor'), { ssr: false })
  return (<MyEditor />);
}

export default add;
