import MyComponent from "@/components/sunEditor";
import dynamic from "next/dynamic";

function Add() {
  // const MyEditor = dynamic(() => import('@/components/myEditor'), { ssr: false })
  // return (<MyEditor />);
  return (<MyComponent />)
}

export default Add;
