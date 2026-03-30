let obj = PLIST.parse($response.body);

obj.AimAssist = 2;
obj.Sensitivity = "5;

$done({ body: PLIST.stringify(obj) });