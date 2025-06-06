# Hi there! 👋 I'm Rudy!

You are cool!
---
[![trophy](https://github-profile-trophy.vercel.app/?username=rudy-in&theme=gruvbox)](https://github.com/rudy-in)

<img src="https://github-readme-stats.vercel.app/api?username=rudy-in&show_icons=true&theme=onedark" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rudy-in&layout=compact&theme=onedark" />

---
# Technology Stack
[![My Skills](https://skillicons.dev/icons?i=js,ts,html,css,astro,rust,zig,c,cpp,go,python,linux,bash,windows,nodejs,figma,lua,kotlin,cmake,docker,arch,arduino,discord,discordjs,firebase,flutter,gmail,git,github,vscode,vim,vscodium,obsidian,nix,tailwind,unity,unreal,blender,vercel,bsd,cs,dart,debian,gradle,androidstudio,anaconda,mongodb,netlify,nextjs,raspberrypi,robloxstudio,gtk,kali,md,mysql,npm,notion,perl,php,postgres,qt,replit,svelte,tauri,tensorflow,vala,vite,wasm)](https://skillicons.dev)
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
