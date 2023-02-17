import ContentLoader from "react-content-loader"
const SceletonLoader = () => {
  return (
    <ContentLoader
    speed={2}
    width={500}
    height={60}
    viewBox="0 0 500 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
>
    <rect x="203" y="22" rx="0" ry="0" width="4" height="3" />
    <rect x="15" y="10" rx="0" ry="0" width="71" height="40" />
    <rect x="96" y="20" rx="0" ry="0" width="169" height="8" />
    <rect x="96" y="35" rx="0" ry="0" width="92" height="6" />
</ContentLoader>
  )
}
export default SceletonLoader