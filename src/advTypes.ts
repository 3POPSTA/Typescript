//TypeScript Advanced Types
//Basic Mapped Type
type Flags<T> = {
    [K in keyof T]: boolean;
}

interface User {
    name:string;
    age:number;
    email:string;
}

type UserFlags = Flags<User>;

const u1:UserFlags = {
    name:true,
    age:true,
    email:true,
}

function getProps(obj:UserFlags,keys:keyof User):void{
    console.log(obj[keys])
}
getProps(u1,"age");
