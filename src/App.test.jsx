
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react';

// Mock the image assets
vi.mock('./assets/maciej_flying.jpg', () => ({ default: 'maciej_flying.jpg' }));
vi.mock('./assets/maciej_borowy_headshot.jpg', () => ({ default: 'maciej_borowy_headshot.jpg' }));
vi.mock('./assets/flight_on_coastline.jpg', () => ({ default: 'flight_on_coastline.jpg' }));
vi.mock('./assets/night_time.jpg', () => ({ default: 'night_time.jpg' }));
vi.mock('./assets/plane_in_sky.jpg', () => ({ default: 'plane_in_sky.jpg' }));
vi.mock('./assets/resources_on_table.jpeg', () => ({ default: 'resources_on_table.jpeg' }));
vi.mock('./assets/wings.jpg', () => ({ default: 'wings.jpg' }));
vi.mock('./assets/logo.svg', () => ({ default: 'logo.svg' }));

describe('Contact Form', () => {
  it('should be invalid if aircraft access is not selected', () => {
    render(<App />);

    const firstNameInput = screen.getByPlaceholderText('Mac');
    const lastNameInput = screen.getByPlaceholderText('Borowy');
    const emailInput = screen.getByPlaceholderText('borowymac@gmail.com');

    fireEvent.change(firstNameInput, { target: { value: 'Test' } });
    fireEvent.change(lastNameInput, { target: { value: 'User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const submitButton = screen.getByText('Send Message');
    const form = submitButton.closest('form');

    // We expect the form to be INVALID if aircraftAccess is not selected.
    expect(form.checkValidity()).toBe(false);
  });
});
