export default class OVAActorSheet extends ActorSheet{
    get template(){
        console.log("ova | Loading " + this.actor.data.type);
        return `systems/ova/templates/sheets/actor-sheet.html`;
    }
    getData(){
        const data = super.getData();
        data.config = CONFIG.ova;
        console.log(data);
		
        data.data.abi = data.items.filter((item => { return item.type === "Abilities" }));
		data.data.weak = data.items.filter((item => { return item.type === "Weakness" }));
        return data;
    }
	
	activateListeners(html){
		html.find(".item-create").click(this._onItemCreate.bind(this));
		html.find(".inline-edit").change(this._onLevelEdit.bind(this));
		html.find(".item-edit").click(this._onItemEdit.bind(this));
		html.find(".item-delete").click(this._onItemDelete.bind(this));
		super.activateListeners(html);
	}
	
	_onItemCreate(event) {
		event.preventDefault();
		let element = event.currentTarget;
		let itemData={
			name: game.i18n.localize("ova.sheet.newItem"),
			type: element.dataset.type
		}
		this.actor.createOwnedItem(itemData);
		let item = this.actor.getOwnedItem(itemId);
		item.sheet.render(true);
	}
	
	_onLevelEdit(event){
		event.preventDefault();
		let element = event.currentTarget;
		let itemId = element.closest(".item").dataset.itemId;
		let item = this.actor.getOwnedItem(itemId);
		let field = element.dataset.field;
		
		return item.update({ [field]:element.value});
	}
	
	_onItemEdit(event){
		event.preventDefault();
		let element = event.currentTarget;
		let itemId = element.closest(".item").dataset.itemId;
		let item = this.actor.getOwnedItem(itemId);
		item.sheet.render(true);
	}
	
	_onItemDelete(event){
		event.preventDefault();
		let element = event.currentTarget;
		let itemId = element.closest(".item").dataset.itemId;
		return  this.actor.deleteOwnedItem(itemId);	
	}
	
}