# react-native-banner
Componente para renderizar banner

## Install
add in package.json:
```bash
"react-native-banner": "git+https://libs:ofImhksJ@git.codificar.com.br/react-components/react-native-banner",
```

execute the command:
```bash
$ yarn
or
$ npm install 
```

## Usage

```javascript
import React from 'react'
import Banner from 'react-native-banner'


  returnValue = (value) => {
    console.log('response request: ', value)
  }

 
 <Banner
  providerId={6}
  providerToken='2y10aOUFzkBkWb64I67aLpgAmcOsFjuFVKUrGtmr8Eis0F026Fo3FK'
  route='https://dev1.motoristaprivado.com.br/api/v3/banner/banner_for_user'
  returnRequest={this.returnValue.bind(this.responseRequest)}
  />


```



## Properties

| Prop  | Default  | Type | isRequired | Description
| :------------ |:---------------:| :---------------:|:---------------:|--
| providerId | '' | `number` | ✔️ | provider id number. |
| providerToken | '' | `string` | ✔️ | provider token. |
| route | '' | `string` | ✔️ | rota da api. |
| returnRequest | '' | `callback function` |  | A function who return the api response. |