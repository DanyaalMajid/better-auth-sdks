# OauthApplication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**icon** | **str** |  | [optional] 
**metadata** | **str** |  | [optional] 
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] 
**redirect_urls** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**disabled** | **bool** |  | [optional] [default to False]
**user_id** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from better_auth.models.oauth_application import OauthApplication

# TODO update the JSON string below
json = "{}"
# create an instance of OauthApplication from a JSON string
oauth_application_instance = OauthApplication.from_json(json)
# print the JSON string representation of the object
print(OauthApplication.to_json())

# convert the object into a dict
oauth_application_dict = oauth_application_instance.to_dict()
# create an instance of OauthApplication from a dict
oauth_application_from_dict = OauthApplication.from_dict(oauth_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


