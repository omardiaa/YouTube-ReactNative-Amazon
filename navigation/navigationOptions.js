import colors from "../theme/colors";
import fonts from "../theme/fonts";

const navigationOptions = {
  headerTintColor: "white",
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
  headerBackTitleStyle: {
    backgroundColor: "green"
  },
  headerStyle: {
    backgroundColor: colors.primary
  },

  headerTitleStyle: {
    fontSize: fonts.size.font24,
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "200"
  },
  cardStyle: {
    backgrounColor: "transparent"
  }
};

export default navigationOptions;
