/**
 * BPMN : Sequence Connector Shape
 *
 * @class
 * @extends OG.shape.EdgeShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {Number[]} from 와이어 시작 좌표
 * @param {Number[]} to 와이어 끝 좌표
 * @param {String} label 라벨 [Optional]
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.bpmn.C_Sequence = function (from, to, label) {
	OG.shape.bpmn.C_Sequence.superclass.call(this, from, to, label);

	this.SHAPE_ID = 'OG.shape.bpmn.C_Sequence';
};
OG.shape.bpmn.C_Sequence.prototype = new OG.shape.EdgeShape();
OG.shape.bpmn.C_Sequence.superclass = OG.shape.EdgeShape;
OG.shape.bpmn.C_Sequence.prototype.constructor = OG.shape.bpmn.C_Sequence;
OG.C_Sequence = OG.shape.bpmn.C_Sequence;

/**
 * 드로잉할 Shape 을 생성하여 반환한다.
 *
 * @return {OG.geometry.Geometry} Shape 정보
 * @override
 */
OG.shape.bpmn.C_Sequence.prototype.createShape = function () {
	if (this.geom) {
		return this.geom;
	}

	this.geom = new OG.Line(this.from || [0, 0], this.to || [80, 0]);
	this.geom.style = new OG.geometry.Style({
		"edge-type"  : "plain",
		"arrow-start": "none",
		"arrow-end"  : "classic-wide-long"
	});

	return this.geom;
};