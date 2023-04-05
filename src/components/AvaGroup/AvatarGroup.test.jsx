import React from "react";
import { render, screen } from "@testing-library/react";
import AvatarGroup from "./AvatarGroup";

describe("AvatarGroup", () => {
  const avatars = [
    { src: "https://via.placeholder.com/150", alt: "Avatar 1" },
    { src: "https://via.placeholder.com/150", alt: "Avatar 2" },
    { src: "https://via.placeholder.com/150", alt: "Avatar 3" },
    { src: "https://via.placeholder.com/150", alt: "Avatar 4" },
    { src: "https://via.placeholder.com/150", alt: "Avatar 5" },
  ];

  it("should render properly with default props", () => {
    const avatarGroup = screen.getByTestId("avatar-group");
    expect(avatarGroup).toBeInTheDocument();
  });

  it("should render avatars properly", () => {
    const avatarElements = screen.getAllByTestId("avatar");
    expect(avatarElements.length).toBe(avatars.length);
    avatarElements.forEach((avatarElement, index) => {
      expect(avatarElement.src).toBe(avatars[index].src);
      expect(avatarElement.alt).toBe(avatars[index].alt);
    });
  });

  it("should render overflow count properly", () => {
    const max = 3;
    const overflowCountElement = screen.getByTestId("overflow-count");
    expect(overflowCountElement).toBeInTheDocument();
    expect(overflowCountElement.textContent).toBe(`+${avatars.length - max}`);
  });

  it("should match snapshot", () => {
    const { container } = render(<AvatarGroup avatars={avatars} max={4} />);
    expect(container).toMatchSnapshot();
  });
});