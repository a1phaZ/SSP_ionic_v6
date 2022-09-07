import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {StorybookConst} from '../../../shared/storybook.const';
import {GalleryComponent} from './gallery.component';
import {GalleryModule} from './gallery.module';

export default {
	component: GalleryComponent,
	title: StorybookConst.app + 'Слайдер',
	decorators: [
		moduleMetadata({
			imports: [GalleryModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const gallerySlider = template.bind({});
gallerySlider.args = {
	slides: [
		{
			id: 200,
			filename: 'gallery_602b6adbb15211613458139.jpg',
			filename_thumb: 'gallery_602b6adbb15211613458139_thumb.jpg',
			name: '0048.jpg'
		},
		{
			id: 201,
			filename: 'gallery_602b6ae5c00311613458149.jpg',
			filename_thumb: 'gallery_602b6ae5c00311613458149_thumb.jpg',
			name: '0053.jpg'
		},
		{
			id: 202,
			filename: 'gallery_602b6aef8df121613458159.jpg',
			filename_thumb: 'gallery_602b6aef8df121613458159_thumb.jpg',
			name: '0018.jpg'
		}
	]
};
