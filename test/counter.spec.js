import Counter from '../src/components/Counter.vue';
import { mount } from 'vue-test-utils'; // mochs up inputs like props automatically
import expect from "expect"; // package to assert expected values

describe ('Counter', ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = mount(Counter); // refreshes the wrapper and its data for each test 
    });

    if('defaults to a count of 0', ()=>{
        expect(wrapper.vm.count).toBe(0);
    });

    it('increments the count when increment button is clicked on', ()=>{
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it ('presents the current count', ()=>{
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.count').html()).toContain(1);
    });

    it('increments the count when decrement button is clicked on', ()=>{
        wrapper.setData({count: 5});
        wrapper.find('.decrement').trigger('click');
        expect(wrapper.vm.count).toBe(4);
    });

    it.only('never goes bellow zero', ()=>{
        wrapper.setData({count: 0})
        expect(wrapper.find('.decrement').hasStyle("display", "none")).toBe(true);
        wrapper.find('.increment').trigger('click');
        expect(wrapper.find('.decrement').hasStyle("display", "none")).toBe(false);
    });

});