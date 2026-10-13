const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetAngle
	];
};
self.C3_JsPropNameTable = [
	{mulai: 0},
	{Audio: 0},
	{Sprite: 0},
	{back2: 0},
	{Sprite2: 0},
	{Platform: 0},
	{Sprite3: 0},
	{Keyboard: 0},
	{rumput: 0},
	{Solid: 0},
	{Sprite4: 0},
	{Bullet: 0},
	{Sprite6: 0},
	{Text: 0},
	{Sprite7: 0},
	{Text2: 0},
	{Sprite9: 0},
	{Text3: 0},
	{Text4: 0},
	{skor: 0},
	{score: 0}
];

self.InstanceType = {
	mulai: class extends self.IButtonInstance {},
	Audio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	back2: class extends self.IButtonInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	rumput: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Text3: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {}
}