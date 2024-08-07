const Header = ()=>{
    const today = new Date();
    const todayNow = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    return(
        <header>
            <h1>{todayNow}</h1>
        </header>
    )
}

export default Header;