# Hi there! 👋 I'm Rudy!
🌱 Currently learning **Rust** | 🐧 Arch Linux enthusiast | 🛠️ Systems tinkerer


## 🏆 GitHub Highlights

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=rudy-in&theme=gruvbox&no-frame=true&margin-w=10" />
</p>

---

## 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=rudy-in&show_icons=true&theme=onedark&hide_border=true" height="150"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rudy-in&layout=compact&theme=onedark&hide_border=true" height="150"/>
</p>

---

---
## 🧰 Tech Toolbox

| Languages | Tools & Frameworks | Dev & Design | OS & Environments |
|----------|--------------------|--------------|-------------------|
| ![C](https://skillicons.dev/icons?i=c) ![C++](https://skillicons.dev/icons?i=cpp) ![Go](https://skillicons.dev/icons?i=go) ![Zig](https://skillicons.dev/icons?i=zig) ![Rust](https://skillicons.dev/icons?i=rust) ![Python](https://skillicons.dev/icons?i=python) | ![Node.js](https://skillicons.dev/icons?i=nodejs) ![Astro](https://skillicons.dev/icons?i=astro) ![Next.js](https://skillicons.dev/icons?i=nextjs) ![Svelte](https://skillicons.dev/icons?i=svelte) ![Tauri](https://skillicons.dev/icons?i=tauri) | ![Figma](https://skillicons.dev/icons?i=figma) ![Vim](https://skillicons.dev/icons?i=vim) ![VSCode](https://skillicons.dev/icons?i=vscode) ![Obsidian](https://skillicons.dev/icons?i=obsidian) | ![Linux](https://skillicons.dev/icons?i=linux) ![Arch](https://skillicons.dev/icons?i=arch) ![Ubuntu](https://skillicons.dev/icons?i=ubuntu) ![Debian](https://skillicons.dev/icons?i=debian) |
| ![JavaScript](https://skillicons.dev/icons?i=js) ![TypeScript](https://skillicons.dev/icons?i=ts) ![Lua](https://skillicons.dev/icons?i=lua) ![Dart](https://skillicons.dev/icons?i=dart) ![Kotlin](https://skillicons.dev/icons?i=kotlin) ![Bash](https://skillicons.dev/icons?i=bash) | ![Flutter](https://skillicons.dev/icons?i=flutter) ![Firebase](https://skillicons.dev/icons?i=firebase) ![Docker](https://skillicons.dev/icons?i=docker) ![CMake](https://skillicons.dev/icons?i=cmake) ![TensorFlow](https://skillicons.dev/icons?i=tensorflow) | ![Git](https://skillicons.dev/icons?i=git) ![GitHub](https://skillicons.dev/icons?i=github) ![Replit](https://skillicons.dev/icons?i=replit) ![Notion](https://skillicons.dev/icons?i=notion) | ![Nix](https://skillicons.dev/icons?i=nix) ![BSD](https://skillicons.dev/icons?i=bsd) ![Raspberry Pi](https://skillicons.dev/icons?i=raspberrypi) ![Kali](https://skillicons.dev/icons?i=kali) |

---
# System Info
```
[rudy@idkagoodname] $ ossfetch
                  `-`                     rudy@idkagoodname
                 .o+`                    -------------------
                `ooo/                    OS: Arch Linux
               `+oooo:                   Host: HP Pavilion 14
              `+oooooo:                  Kernel: linux-6.14-arch1
              -+oooooo+:                 Uptime: 3 hours, 53 mins
            `/:-:++oooo+:                Packages: 1360 (pacman), 10 (flatpak)
           `/++++/+++++++:               Shell: bash 5.2
          `/++++++++++++++:              Display (BOE0868): 1920x1080 @ 60Hz
         `/+++ooooooooooooo/`            DE: GNOME 48
        ./ooosssso++osssssso+`           WM: Mutter
       .oossssso-````/ossssss+`          Font: SF Pro (10pt)
      -osssssso.      :ssssssso.         Terminal: console
     :osssssss/        osssso+++.        Terminal Font: SF Mono (12pt)
    /ossssssss/        +ssssooo/-        CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 4.40GHz
  `/ossssso+/:-        -:/+osssso+-      GPU: Intel TigerLake [Integrated]
 `+sso+:-`                 `.-/+oso:     Memory: 1430 MiB / 15650 MiB
`++:.                           `-/+/    Battery: 90% [Discharging]
.`                                 `/    Locale: en_US.UTF-8


[rudy@idkagoodname] $
```
## Peak C codes i wrote back in 2022
```c
#include <stdio.h>
#include <stdlib.h>
int b(int a,int c){return(c-a)<2;}int m(int a,int c){return(a+c)/2;}int*f(int n){int*p=malloc(n*sizeof(int));if(!p)exit(1);return p;}int g(int*d,int i,int j,int m,int e){return(j==e||(i<m&&d[i]<=d[j]));}int x(int*a){return(*a)++;}void h(int*d,int l,int m,int r,int*z){int i=l,j=m,k=0;while(i<m||j<r)z[k++]=g(d,i,j,m,r)?d[x(&i)]:d[x(&j)];}void c(int*d,int o,int*z,int n){for(int i=0;i<n;)d[o+i]=z[i++];}void q(int*d,int s,int e){if(b(s,e))return;int q=m(s,e);q(d,s,q);q(d,q,e);int*z=f(e-s);h(d,s,q,e,z);c(d,s,z,e-s);free(z);}int main(){int a[]={42,13,7,99,5,23,8,1};int n=sizeof(a)/sizeof(a[0]);q(a,0,n);for(int i=0;i<n;i++)printf("%d%c",a[i],i==n-1?'\n':' ');return 0;}
```
with macros
```c
#define _ ;
#define O 0x0
#define __ main(
#define ___ )
#define ____ {
#define _____ }
#define ______ char*
#define _______ int
#define ________ printf
#define __________ return
#define ___________ =
#define X(x) x##
#define Y(x) #x
#define Z(X,Y) X##Y
#define a(a,b) a##b
#define b(a,b) a b
#define c(a) #a

#include <stdio.h>
#include <stdlib.h>

__ ___
____
    _______ lOl___________Z(va,riable)___O_ 
    ______ X(ch)___________X(str)[]_="_H\105llo,_\x20Worl\144!\n"_ 
    lOl___________X(str)[1]_ 
    b(__________,X(str))_ 
    __________ O _
_____
```
(All this is useless for you to know but good for me to add them)
---
## Project Roadmap
A bunch of stuff im working on:
- [ ] [RadianOS](https://github.com/RadianOS/radianos)
- [ ] libxnotch (Core Utils library for RadianOS)


![snakegif](https://github.com/rudy-in/rudy-in/blob/assets/snake-light.svg)
