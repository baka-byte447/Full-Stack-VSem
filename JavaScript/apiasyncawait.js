async function doeverything(params){
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    let details = await posts.json();

    console.log(details);
}

doeverything();                                             