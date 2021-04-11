import Counter from '../src/components/Counter.js';
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

    it('increments the count when button is clicked', ()=>{
        expect(wrapper.vm.count).toBe(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.vm.count).toBe(1);
    });

    it ('presents the current count', ()=>{
        expect(wrapper.find('.count').html()).toContain(0);
        wrapper.find('button').trigger('click');
        expect(wrapper.find('.count').html()).toContain(1);
    });
});