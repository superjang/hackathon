# __SmileLinker__
해커톤 UI개발을 위한 프론트 테스크 자동화 툴입니다.


## Usage
1. ruby를 설치합니다.([v2.4.2 64bit download](https://github.com/oneclick/rubyinstaller2/releases/download/rubyinstaller-2.4.2-2/rubyinstaller-2.4.2-2-x64.exe))
2. sass를 설치합니다.(__Sass Installation__ 참고)
3. node를 설치합니다.([v8.7.0 64bit download](https://nodejs.org/dist/v8.7.0/node-v8.7.0-x64.msi))
4. git clone 명령을 통해 해당 저장소를 작업자 PC에 clone 합니다.
5. 저장소 내 `./app` 폴더로 이동합니다.
6. gulp task 처리에 필요한 module을 다운로드 합니다. (__Installation__ 참고)
7. build 명령어를 통해 gulp를 실행시킵니다. (__Build__ 참고)

## Sass Installation
```
gem install sass
```

## Installation
아래 명령어 입력하여 task 처리에 필요한 node module을 다운로드 합니다.
```
npm run install
```


## Build
모듈 다운로드가 완료되면 아래 build 명령어를 통해 gulp task를 실행합니다.
```
npm run build
```

## Description
빌드가 완료되면 node 서버를 통해 작업된 산출물이 정적 컨텐츠로 서빙됩니다.<br/>
기본적으로 directory 리스팅이 되도록 처리하여 `build/` 폴더 경로로 브라우저가 열리게 되며 `./html` 폴더 내에서 작업 산출물을 확인하실 수 있습니다.<br/>
`./app/src/` 하위 폴더의 `html/, scss/, js/, image/` 폴더는 `watch` task로 변경을 감지하고 있어 파일 변경 후 저장하시면 새로고침 없이 브라우저에 자동으로 반영됩니다.

## TODO
- add css/js concat minifiy uglify task
- add image sprite generator task
- add html/css/js lint task
