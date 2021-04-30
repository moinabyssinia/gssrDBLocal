import os
import json
import pandas as pd

os.chdir("C:\\Users\\mi292519\\OneDrive\\gssrDB")

print(os.listdir())

dat = pd.read_csv("twcrValidation.csv")

dat = dat[['tg', 'lon', 'lat', 'corrn_lr', 'rmse_lr']]

for ii in range(len(dat)):
    dat['tg'][ii] = dat['tg'][ii].split('.csv')[0]

dat.columns = ['tg', 'lon', 'lat', 'correlation', 'rmse']
dat.to_csv('tgData.csv')