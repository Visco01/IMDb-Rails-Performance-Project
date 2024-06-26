import pandas as pd
import matplotlib.pyplot as plt


def pad_data(names, failure_names, failure_counts):
    data = []
    j = 0
    for i in range(len(names)):
        if names[i] in failure_names:
            data.append(failure_counts[j])
            j = j + 1
        else:
            data.append(0)
    return data


def main() -> None:
    # Load the CSV file
    df: pd.DataFrame = pd.read_csv(
        '/home/force/Documents/GitHub/Performance-Project/jmeter/medium-load-tests/results/medium_load_tests.csv'
    )

    number_of_users: dict[str, str] = {
        'A': '400', 'B': '600', 'C': '800', 'D': '1000', 'E': '1200',  # 'F': '200', 'G': '400'
    }

    name = 'threadName'
    latency = 'Latency'
    success = 'success'

    # Manipulate the 'threadName' column
    df[name] = df[name].str[18:19]

    # Select specific columns
    selected_columns = df[[name, latency, success]]

    # Group by 'threadName' and compute the average of the 'Latency' column for each group
    average_latency_by_name = selected_columns.groupby(
        name)[latency].mean().reset_index()

    # Count the number of failures for each thread
    failure_counts = selected_columns[selected_columns[success] == False].groupby(
        name)[success].count().reset_index()
    failure_counts.rename(columns={success: 'failure_count'}, inplace=True)

    # Print the average latency and failure counts for each thread
    print(average_latency_by_name)
    print(failure_counts)

    # Prepare data for plotting
    users = [int(number_of_users[key]) for key in number_of_users.keys()]
    latencies = average_latency_by_name[latency].tolist()
    failure_counts_list = pad_data(
        list(number_of_users.keys()),
        list(failure_counts[name]),
        list(failure_counts['failure_count'])
    )

    # Plot the results in a scatter plot for average latency
    plt.figure(figsize=(10, 6))
    plt.scatter(users[:4], latencies[:4], marker='o', label='Average Response Time')
    plt.plot(users[:4], latencies[:4])  # Connect the dots with a line

    # Add title and labels
    plt.title('Average Response Time by Number of Users')
    plt.xlabel('Number of Users')
    plt.ylabel('Average Response Time (ms)')

    # Show grid
    plt.grid(True)
    plt.legend()

    # Save the plot as SVG file
    plt.tight_layout()  # Adjust layout to make room for x-axis labels
    plt.savefig('jmeter/py_analyze/average_response_time_by_number_of_users.svg')

    # Plot the results in a bar graph for failure counts
    plt.figure(figsize=(10, 6))
    plt.bar(users, failure_counts_list, color='red', label='Failure Count')

    # Add title and labels
    plt.title('Failure Count by Number of Users')
    plt.xlabel('Number of Users')
    plt.ylabel('Failure Count')

    # Show grid
    plt.grid(True)
    plt.legend()

    # Save the plot as SVG file
    plt.tight_layout()  # Adjust layout to make room for x-axis labels
    plt.savefig('jmeter/py_analyze/failure_count_by_number_of_users.svg')

    plt.show()


if __name__ == "__main__":
    main()
