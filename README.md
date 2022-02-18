# UFO's

### 1. Overview of Project:
#### We are building a web page that will use filters to slice and dice UFO data to the end users liking. A table will then be displayed based on search criteria for in-depth analysis on UFO sightings. 

### 2. Results:

* June temperatures are likely to remain above 70 degrees year over year with an average of ~75 degrees and standard deviation of ~3.2.

    ![june](https://github.com/maldonado91/Surfs-Up2/blob/main/Resources/june_stats.PNG) 

* December also has an average temperature in the 70's but there is a small risk when looking at some of the lower temperatures of 56 degrees.

    ![december](https://github.com/maldonado91/Surfs-Up2/blob/main/Resources/december_stats.PNG)
    
* Overall the temperatures are similar despite the December cold season. Expectations are the temperature will reamin in the 70's no matter if we are in the summer or heading to the winter. 
 
### 3. Summary:
#### The data shows we can expect fairly decent temperture year round which provides a bit of confidence in the business, however, I belive looking at the precipitation data would be nice as well since people tend to stay in on rainy days.
#### Additional Queries:
1. Write a function to run statistics for any month for temperature

    ```
    # Create a function to run statstics for any month.
    def month_stats(month_num):

        '''
        Take a number representating a month and calculate statistics
        '''

        # Write a query that filters the Measurement table to retrieve the temperatures for the month.
        month_temps = session.query(Measurement.date, Measurement.tobs).\
                        filter(extract('month', Measurement.date) == month_num).all()

        # Convert the month temperatures to a list.
        month_temps_list = list(month_temps)

        # Create a DataFrame from the list of temperatures for the month. 
        df_month = pd.DataFrame(month_temps_list)

        df_month.rename(columns={'tobs': 'Temps'}, inplace=True)

        # Calculate and print out the summary statistics for the month temperature DataFrame.
        return df_month.describe()
    ```
2. Write a function to run statistics for any month for precipitation
    ```
    # Create a function to run statstics for any month.
    def month_stats_prcp(month_num):

        '''
        Take a number representating a month and calculate statistics
        '''

        # Write a query that filters the Measurement table to retrieve the temperatures for the month.
        month_prcp = session.query(Measurement.date, Measurement.prcp).\
                        filter(extract('month', Measurement.date) == month_num).all()

        # Convert the month precipitation to a list.
        month_prcp_list = list(month_prcp)

        # Create a DataFrame from the list of temperatures for the month. 
        df_month = pd.DataFrame(month_prcp_list)

        df_month.rename(columns={'prcp': 'Prcp'}, inplace=True)

        # Calculate and print out the summary statistics for the month temperature DataFrame.
        return df_month.describe()
     ```
