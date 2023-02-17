
const SearchResultItem = ({item}) => {
  return (
    <div className="search-result-item">
        <img className="img" src={item.thumbnailUrl} alt=""  />
        <div>
            <div className="title">{item.title}</div>
            <div className="itemid">{item.id}</div>

        </div>
   </div>
  )
}
export default SearchResultItem