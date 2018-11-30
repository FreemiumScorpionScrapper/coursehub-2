import { Search } from '../components/search.co';
import { CourseCard } from '../components/course-card.co';
import { TestUtils } from '../utils/test-utils.uo'

describe('Test course search', () => {
  let courseCard: CourseCard;
  let search: Search;
  let testUtils: TestUtils;

  beforeEach(() => {
    courseCard = new CourseCard();
    search = new Search();
    testUtils = new TestUtils();
  });

  it('should search for csc165 and have one search result', () => {
    testUtils.navigateTo();
    search.getSearchBarInput().click();
    search.typeInSearchBar("CSC165").then(() => {
      expect(courseCard.getCourseCardHeader()).toBeDefined();
      expect(courseCard.getCourseCardHeaderText()).toEqual("CSC165H1");
      expect(courseCard.getCourseCardDescriptionText()).toContain("Introduction to abstraction and rigour. Informal");
    });
  });

  it('should search for csc165 clicking it should lead to course page', () => {
    testUtils.navigateTo();
    search.getSearchBarInput().click();
    search.typeInSearchBar("CSC165").then(() => {
      courseCard.getCourseCardHeader().click();
      expect(testUtils.getCurrentPageUrl()).toEqual("http://localhost:4200/course/20043");
    });
  });

  it('should persist previous search results and input when back button pressed from course-page', () => {
    testUtils.navigateTo();
    search.getSearchBarInput().click();
    search.typeInSearchBar("CSC165").then(() => {
      expect(courseCard.getCourseCardHeaderText()).toEqual("CSC165H1");
      courseCard.getCourseCardHeader().click();
      expect(testUtils.getCurrentPageUrl()).toEqual("http://localhost:4200/course/20043");
      testUtils.navigateBack();
      expect(testUtils.getCurrentPageUrl()).toEqual("http://localhost:4200/search/CSC165");
      expect(courseCard.getCourseCardHeaderText()).toEqual("CSC165H1");
      expect(courseCard.getCourseCardDescriptionText()).toContain("Introduction to abstraction and rigour. Informal");
      expect(search.getSearchBarInputValue()).toEqual("CSC165");
    });
  });
});