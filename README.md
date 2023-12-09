# CodeK SDK

This SDK provides functionalities to interact with the CodeK API.

## Installation

To use the CodeK SDK in your project, install it via npm:

```bash
npm install codek-sdk
```

```js
import { CodeK } from '..';

const connect = new CodeK({
  ProjectId: '6dd3a52d-93e5-4b7a-8388-0ba0c9602e3a',
});

(async () => {
  const result = await connect.getPullAll({ 
		type: 'opened' 
	});
  console.log(result);
  const result1 = await connect.getPullByWallet({ 
		walletAddress: 'sdfsdg', 
  	type: 'opened'
  });
  console.log(result1);
})();
```
