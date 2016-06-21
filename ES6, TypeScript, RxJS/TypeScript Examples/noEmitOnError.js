// The TypeScript compiler will compile whatever you throw at it, even if it detects obvious errors.

// Type an obvious error into your app.ts, like a invoking a function that doesn't exist:

obviousError();

//and you'll see it compile just fine.

//To stop it from compiling, enable the noEmitOnError option in tsconfig.json:

// {
//     "compilerOptions": {
//     "module": "commonjs",
//         "target": "es5",
//         "noImplicitAny": false,
//         "sourceMap": false,
//         "noEmitOnError": true
// },
//     "exclude": [
//     "node_modules"
// ]
// }
