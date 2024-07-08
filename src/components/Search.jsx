const Search = ({search, setSearch}) => {
   return (
     <div className="search">
        <h2>Search</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter the search..."/>
     </div>
   )
 }
 
 export default Search