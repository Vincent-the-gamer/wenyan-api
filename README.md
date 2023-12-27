<p align="center">
    <img src="./.github/wenyan.png" style="height: 90px;"/>
</p>
<h1 align="center">Wenyan API</h1>
<p align="center">Wenyan-lang HTTP API.</p>

中文文档: [README_zh-hans.md](./README_zh-hans.md)

# What is Wenyan-lang？
Go to the repo: [Wenyan-lang 文言文編程语言](https://github.com/wenyan-lang/wenyan)

# Usage

## Clone This Repository
~~~shell
git clone https://github.com/Vincent-the-gamer/wenyan-api.git
~~~

## Install Dependency
~~~shell
pnpm install
~~~

## Run Server
~~~shell
pnpm dev
~~~

Server will run at `http://localhost:8080` by default.

You can change your host and port in `server.ts`

~~~js
const host = "0.0.0.0"
const port = 8080
~~~

## Call API
* URL: `http://localhost:8080`
* Method: `post`
* Request Body: 
    ~~~json
    {
        "code": "吾有一數。曰三。名之曰「甲」。為是「甲」遍。吾有一言。曰「「問天地好在。」」。書之。云云。"
    }
    ~~~
Then you will get your response:
~~~json
{
	"code": 200,
	"data": "問天地好在。\n問天地好在。\n問天地好在。\n"
}
~~~

Example using axios to call API:
~~~js
axios.post("http://localhost:8080",{
    code: "吾有一數。曰三。名之曰「甲」。為是「甲」遍。吾有一言。曰「「問天地好在。」」。書之。云云。"
}).then(
    res => {
        console.log(res.data.data)
    }
)
~~~

## Run code in shell(Use CLI)
Write your Wenyan code in `src/main.wy`
```
吾有一數。曰三。名之曰「甲」。
為是「甲」遍。
    吾有一言。曰「「問天地好在。」」。書之。
云云。
```

then

```shell
pnpm wyg run ./src/main.wy
```

# Package Manager: Wyg(文渊阁, 文淵閣, Wenyan-get)

Now you can use `wyg packages` in your code.

**Example:**

* Install
~~~shell
# install package ziyue(子曰)
pnpm wyg i ziyue 

# or 
pnpm wyg i 子曰
~~~

* Usage
~~~
吾嘗觀「「子曰」」之書。方悟「子曰」之義。 

子曰「「学而时习之，不亦说乎？」」。 
~~~

Result:

~~~
                 __._                                    
                / ___)_                                  
               (_/Y ===\                            __  
               |||.==. =).                            |  
               |((| o |p|      |  学而时习之，不亦说乎？
            _./| \(  /=\ )     |__                     
          /  |@\ ||||||||.                              
         /    \@\ ||||||||\                           
        /   \  \@\ ||||||//\                         
       (     Y  \@\|||| // _\                         
       |    -\   \@\ \\//    \                     
       |     -\__.-./ //\.---.^__                      
       | \    /  |@|__/\_|@|  |  |                     
       \__\      |@||| |||@|     |                     
       <@@@|     |@||| |||@|    /                        
      / ---|     /@||| |||@|   /                         
     |    /|    /@/ || |||@|  /|                         
     |   //|   /@/  ||_|||@| / |                         
     |  // \ ||@|   /|=|||@| | |                        
     \ //   \||@|  / |/|||@| \ |                      
     |//     ||@| /  ,/|||@|   |                         
     //      ||@|/  /|/||/@/   |                         
    //|   ,  ||//  /\|/\/@/  / /                       
   //\   /   \|/  /H\|/H\/  /_/                      
  // |\_/     |__/|H\|/H|\_/                          
 |/  |\        /  |H===H| |                             
     ||\      /|  |H|||H| |                             
     ||______/ |  |H|||H| |                              
      \_/ _/  _/  |L|||J| \_                           
      _/  ___/   ___\__/___ '-._                        
     /__________/===\__/===\---'                       
                                                                                    
~~~

More about wyg：[https://github.com/wenyan-lang/wyg](https://github.com/wenyan-lang/wyg)