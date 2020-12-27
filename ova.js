import OVAItemSheet from "./module/sheets/ovaItemSheet.js";
import OVAActorSheet from "./module/sheets/ovaActorSheet.js";

Hooks.once("init", function() {
	console.log("OVA | Initialising Open Versatile Anime System");
	
	Items.unregisterSheet("core", ItemSheet);
	Items.registerSheet("ova", OVAItemSheet, {makeDefault:true});
	Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("ova", OVAActorSheet, { makeDefault: true });
});
