console.log("Aimlock")

let obj = SCRIPT.parse($response.body);

obj.Drag = Lock(bone_Hed);
obj.Drag = noRecoil;
obj.lock(bone_Head) = 80%;

$done({ body: SCRIPT.stringify(obj) });