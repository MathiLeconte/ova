export default class OVAItemSheet extends ItemSheet{
	get template(){
		return `systems/ova/templates/sheets/${this.item.data.type}-sheet.html`;
	}
	getData() {
		const data = super.getData();
		data.config = CONFIG.ova;
		return data;
	}
}