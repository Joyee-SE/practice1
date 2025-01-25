const check = (friends)=>
{
    let biggest=friends[0];
    for(let i=1; i<friends.length; i++)
    {
        if(friends[i].length>biggest.length)
        {
            biggest=friends[i];
        }
    }
    return biggest;
}

var friends=["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var big=check(friends);
console.log(big);