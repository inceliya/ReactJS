import {useCallback, useEffect, useState} from "react";
import {useSearchParams, useNavigate} from "react-router-dom";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [value, setValue] = useState(query || '');
  const navigate = useNavigate();

  const onChange = useCallback((e) => setValue(e.target.value), []);
  const onEnter = useCallback(() => navigate('/products/search?q=' + value), [value, navigate]);
  const onKeyDown = useCallback((e) => e.code === "Enter" && onEnter(), [onEnter]);

  useEffect(() => setValue(query), [query]);

  return (
    <div tabIndex="0" onKeyDown={onKeyDown}>
      <input type="text" name="search" value={value} onChange={onChange}/>
      <input type="button" name="submit" onClick={onEnter} value="Шукати"/>
    </div>
  )
}

export default SearchBar;