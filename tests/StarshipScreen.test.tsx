import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';
import StarshipsScreen from '../src/screens/starshipsScreen';
import { getStarships } from '../src/services/starshipsService';

jest.mock('../src/services/starshipsService');

const mockStarships = [
  {
    name: 'X-wing',
    starship_class: 'Starfighter',
    cost_in_credits: '149999',
    manufacturer: 'Incom Corporation',
    crew: '1',
  },
  {
    name: 'Millennium Falcon',
    starship_class: 'Light freighter',
    cost_in_credits: '100000',
    manufacturer: 'Corellian Engineering Corporation',
    crew: '4',
  },
];
import React from 'react';
import { render, waitFor, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from '../App';
import StarshipsScreen from '../src/screens/starshipsScreen';
import { getStarships } from '../src/services/starshipsService';

jest.mock('../src/services/starshipsService');

const mockStarships = [
    {
        name: 'X-wing',
        starship_class: 'Starfighter',
        cost_in_credits: '149999',
        manufacturer: 'Incom Corporation',
        crew: '1',
    },
    {
        name: 'Millennium Falcon',
        starship_class: 'Light freighter',
        cost_in_credits: '100000',
        manufacturer: 'Corellian Engineering Corporation',
        crew: '4',
    },
];

describe('App', () => {
  it('should render loading screen initially', async () => {
    await act(async () => {
      const { getByText } = render(<App />);
      expect(getByText('Loading...')).toBeTruthy();
    });
  });

  it('should load fonts and render the main app', async () => {
    await act(async () => {
      const { getByText } = render(<App />);
      await waitFor(() => expect(getByText('Available Starships')).toBeTruthy());
    });
  });
});

describe('StarshipsScreen', () => {
  beforeEach(() => {
    (getStarships as jest.Mock).mockResolvedValue(mockStarships);
  });

  it('should fetch and display starships', async () => {
    await act(async () => {
      const { getByText } = render(
        <NavigationContainer>
          <StarshipsScreen />
        </NavigationContainer>
      );
      await waitFor(() => {
        expect(getByText('X-wing')).toBeTruthy();
                expect(getByText('Starfighter')).toBeTruthy();
                expect(getByText('149999')).toBeTruthy();
                expect(getByText('Incom Corporation')).toBeTruthy();
                expect(getByText('1')).toBeTruthy();

                expect(getByText('Millennium Falcon')).toBeTruthy();
                expect(getByText('Light freighter')).toBeTruthy();
                expect(getByText('100000')).toBeTruthy();
                expect(getByText('Corellian Engineering Corporation')).toBeTruthy();
                expect(getByText('4')).toBeTruthy();
            });
        });
    });

    it('should render all starship details', async () => {
        await act(async () => {
            const { getByText } = render(
                <NavigationContainer>
                    <StarshipsScreen />
                </NavigationContainer>
            );
            await waitFor(() => {
                mockStarships.forEach(starship => {
                    expect(getByText(starship.name)).toBeTruthy();
                    expect(getByText(starship.starship_class)).toBeTruthy();
                    expect(getByText(starship.cost_in_credits)).toBeTruthy();
                    expect(getByText(starship.manufacturer)).toBeTruthy();
                    expect(getByText(starship.crew)).toBeTruthy();
                });
            });
        });
    });
});

// TypeScript type test (this will be enforced by TypeScript during compilation)
type Starship = {
    name: string;
    starship_class: string;
    cost_in_credits: string;
    manufacturer: string;
    crew: string;
};

// Ensure the type includes the required fields
const testStarship: Starship = {
    name: 'Test Ship',
    starship_class: 'Test Class',
    cost_in_credits: '12345',
    manufacturer: 'Test Manufacturer',
    crew: '5',
};
        expect(getByText('Starfighter')).toBeTruthy();
        expect(getByText('149999')).toBeTruthy();
        expect(getByText('Incom Corporation')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();

        expect(getByText('Millennium Falcon')).toBeTruthy();
        expect(getByText('Light freighter')).toBeTruthy();
        expect(getByText('100000')).toBeTruthy();
        expect(getByText('Corellian Engineering Corporation')).toBeTruthy();
        expect(getByText('4')).toBeTruthy();
      });
    });
  });
});